import test from 'ava'
import flattenObject from './index.js'

const obj = {
    status: 'success',
    user: {
        email: 'nwaughac@gmail.com',
        name: {
            first: 'Chukwuma',
            last: 'Nwaugha'
        }
    }
}

test('can flatten a nested object', (t) => {
    const result = flattenObject(obj)   
    t.deepEqual(result, {
        'status': 'success',
        'user.email': 'nwaughac@gmail.com',
        'user.name.first': 'Chukwuma',
        'user.name.last': 'Nwaugha'
    })
})

test('can flatten a nested object using separator _', (t) => {
    const sep = '_'
    const result = flattenObject(obj, sep)
    t.deepEqual(result, {
        'status': 'success',
        'user_email': 'nwaughac@gmail.com',
        'user_name_first': 'Chukwuma',
        'user_name_last': 'Nwaugha'
    })
})

const api = {
    users: {
        getUser(id) {},
        getUsers() {}
    },
    video: {
        getVideo(id) {},
        getVideos() {}
    },
    channel: {
        getChannel(id) {},
        getChannels() {},
        videos: {
            getVideo(id, cid) {},
            getVideos(cid) {}
        }
    }
}

// create route paths from api object
test(`can flatten api object with path ("/") separator`, (t) => {
    const sep = '/'
    const result = flattenObject(api, sep)
    t.deepEqual(result, {
        'users/getUser': api.users.getUser,
        'users/getUsers': api.users.getUsers,
        'video/getVideo': api.video.getVideo,
        'video/getVideos': api.video.getVideos,
        'channel/getChannel': api.channel.getChannel,
        'channel/getChannels': api.channel.getChannels,
        'channel/videos/getVideo': api.channel.videos.getVideo,
        'channel/videos/getVideos': api.channel.videos.getVideos
    })
})