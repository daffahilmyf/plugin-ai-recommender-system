import { GitHub } from '@actions/github/lib/utils';
import { OctokitConfig } from '@interfaces/github.interface';

export const verifyBranch = async (octokit: InstanceType<typeof GitHub>, config: OctokitConfig): Promise<boolean> => {
    if (!octokit || !config) {
        throw new Error('Octokit client and branch name are required');
    }

    const { owner, repo, branchName } = config;
    const { getRef } = octokit.rest.git;


    const response = await getRef({
        owner,
        repo,
        ref: `heads/${branchName}`
    });

    if (response.status !== 200) {
        return false;
    }

    return true;
}