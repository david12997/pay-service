export const SendData = async (urls: string[], method: string, body?: BodyInit | string, token?: string) => {
    try {
        const promises: any[] = [];

        urls.forEach((url: string, index: number) => {
            const headers: HeadersInit = {
                'Accept': 'application/json'
            };

            if (token) { headers['Authorization'] = `Bearer ${token}`;}

            // Only set 'Content-Type' if body is not FormData
            if (!(body instanceof FormData)) { headers['Content-Type'] = 'application/json';}

            
            promises[index] = fetch(url, {
                method: method,
                headers: headers,
                body: body
            });
        });

        const response = await Promise.all(promises);
        return await Promise.all(response.map(res => res.json()));

    } catch (error) {
        throw error;
    }
};