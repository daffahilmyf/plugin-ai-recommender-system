export interface OctokitConfig {
    owner: string;
    repo: string;
    branchName: string;

}

export interface OctokitConfigWithSha extends OctokitConfig {
    sha: string;
}