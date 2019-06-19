class GitHub {
    constructor() {
        this.client_id = 'ce55bb2a74de5d3eec24';
        this.client_secret = '34cb60704e8e07acd331e5cd63ad2a24dc9641fa';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}