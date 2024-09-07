import { OctokitConfigWithSha } from '@interfaces/github.interface';
import { GitHub } from '@actions/github/lib/utils';


export const updateBranch = async (client: InstanceType<typeof GitHub>, config: OctokitConfigWithSha): Promise<void> => {
    if (!client || !config) {
        throw new Error('Octokit client and config are required');
    }

    const { owner, repo, branchName, sha } = config;

    const { updateRef } = client.rest.git;

    const response = await updateRef({
        owner,
        repo,
        ref: `heads/${branchName}`,
        sha
    });

    if (response.status !== 200) {
        throw new Error(`Failed to update branch ${branchName}`);
    }

    console.log(`Branch ${branchName} updated successfully`);
}