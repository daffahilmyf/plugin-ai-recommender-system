import { GitHub } from '@actions/github/lib/utils';
import { OctokitConfigWithSha } from '@interfaces/github.interface';

export const createBranch = async (octokit: InstanceType<typeof GitHub>, config: OctokitConfigWithSha): Promise<void> => {

    if (!octokit || !config) {
        throw new Error('Octokit client and config are required');
    }

    const { owner, repo, branchName, sha} = config;
    const { createRef } = octokit.rest.git;

    const reponse =  await createRef({
        owner,
        repo,
        ref: `refs/heads/${branchName}`,
        sha
    });

    if (reponse.status !== 201) {
        throw new Error(`Failed to create branch ${branchName}`);
    }

    console.log(`Branch ${branchName} created successfully`);
}