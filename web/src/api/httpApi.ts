const fetchApi = async <I, O>(method: string, url: string, body?: I): Promise<O> => {
    const options: any = {
        method,
        headers: {}
    };
    if (body) {
        options.body = JSON.stringify(body)
    }
    const result = await fetch(url, options);
    return await result.json();
}

export const get = async <O>(url: string): Promise<O> => {
    return await fetchApi('GET', url);
}

export const post = async <O, I>(url: string, body?: I): Promise<O> => {
    return await fetchApi('POST', url, body);
}