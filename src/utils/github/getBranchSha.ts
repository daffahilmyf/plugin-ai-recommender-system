import { GitHub } from '@actions/github/lib/utils';
import { OctokitConfig } from '@interfaces/github.interface';

export const getBranchSha = async (octokit: InstanceType<typeof GitHub>, config: OctokitConfig): Promise<string> => {
    if (!octokit || !config) {
        throw new Error('Octokit client and config are required');
    }

    const { owner, repo, branchName } = config;
    const { getRef } = octokit.rest.git;

    const {data} = await getRef({
        owner,
        repo,
        ref: `heads/${branchName}`
      });

    return data.object.sha;
}