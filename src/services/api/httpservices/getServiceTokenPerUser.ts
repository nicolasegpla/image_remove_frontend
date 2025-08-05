interface GetServiceTokenPerUser {
    userId: string;
    url: string;
}

export const getServiceTokenPerUser = async ({ userId, url }: GetServiceTokenPerUser) => {
    console.log('Fetching service token for user:', `${url}${userId}/tokens`);
    try {
        const response = await fetch(`${url}${userId}/tokens`);

        if (!response.ok) {
            throw new Error(`Error fetching service token: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Service token data:', data);
        return data;
    } catch (error) {
        console.error('Failed to fetch service token:', error);
        throw error;
    }
};
