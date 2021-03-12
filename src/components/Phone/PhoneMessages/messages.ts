const messages = [
    {
        id: 1,
        sent: false,
        images: false,
        rate: false,        
        messages: [
            {
                id: 1,
                message: 'That sounds great. I\'d be happy with that.',
            },
            {
                id: 2,
                message: 'Could you send over some pictures of your dog, please?'
            }
        ]
    },
    {
        id: 2,
        sent: true,
        images: true,
        rate: false,        
        messages: [
            {
                id: 1,
                message: 'Here are a few pictures. She\'s a happy girl',
            },
            {
                id: 2,
                message: 'Can you make it?'
            }
        ]
    },
    {
        id: 3,
        sent: false,
        images: false,
        rate: true,
        messages: [
            {
                id: 1,
                message: 'She looks so happy! The time we discussed works. How long shall I take her out for ?',
            },
        ]
    },
];

export default messages;