# flatten-object

Flatten javascript objects to a single level, with the ability to choose delimiter/separator.

## Installation

```bash
pnpm install flatten-object

yarn add flatten-object

npm install flatten-object
```

## Usage

```js
import flattenObject from 'flatten-object'
// 1. as a simple object flattener

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

const result = flattenObject(obj)

// result : => 
{
    'status': 'success',
    'user.email': 'nwaughac@gmail.com',
    'user.name.first': 'Chukwuma',
    'user.name.last': 'Nwaugha'
}

// 2. accepts a separator

  const sep = '_'
  const result = flattenObject(obj, sep)

// result :=>
{
    'status': 'success',
    'user_email': 'nwaughac@gmail.com',
    'user_name_first': 'Chukwuma',
    'user_name_last': 'Nwaugha'
}

// 3. can be used in creating route paths in web frameworks

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

 const sep = '/'
 const result = flattenObject(obj, sep)

 // result :=>

 {
    'users/getUser': api.users.getUser,
    'users/getUsers': api.users.getUsers,
    'video/getVideo': api.video.getVideo,
    'video/getVideos': api.video.getVideos,
    'channel/getChannel': api.channel.getChannel,
    'channel/getChannels': api.channel.getChannels,
    'channel/videos/getVideo': api.channel.videos.getVideo,
    'channel/videos/getVideos': api.channel.videos.getVideos
}

```

## API

```ts
flattenObject(obj: {[key: string]: any}, sep: string)
```

- **obj**: A javascript object of any nesting level.

- **sep**: Separator string for flattening, defaults to '.'
