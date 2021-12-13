/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        API_URL: process.env.NEXT_APP_API_URL,
    },
    async headers() {
        return [
            {
                source: '/api/projects',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,POST',
                    },
                    {
                        key: 'Content-Type',
                        value: 'application/json',
                    },
                ],
            },
            {
                source: '/api/projects/:id',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                     {
                        key: 'Access-Control-Allow-Methods',
                        value: 'PUT,DELETE',
                    },

                    {
                        key: 'Content-Type',
                        value: 'application/json',
                    },
                ],
            },
        ];
    },
};
