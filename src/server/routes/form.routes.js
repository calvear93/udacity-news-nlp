function exec({ query: { date } }, response)
{
    response.send('yeh');
}

// exports route
export default {
    path: '/api/test',
    method: 'get',
    exec
};
