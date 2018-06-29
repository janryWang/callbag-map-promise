# callbag-map-promise

[![Greenkeeper badge](https://badges.greenkeeper.io/janryWang/callbag-map-promise.svg)](https://greenkeeper.io/)

> map + fromPromise + flatten



## Install

```
npm install --save  callbag-map-promise
```

## Usage

```
import {fromPromise,pipe,forEach} from 'callbag-basics'
import mapPromise from 'callbag-map-promise'
import fetch from 'mfetch'

//no pipeline

pipe(
    fromPromise(
        fetch('/user',...).then(res=>res.json())
    ),
    mapPromise(user=>fetch('/products',{
        data:user
       }).then(res=>res.json())
    ),
    forEach((data)=>{
        console.log(data)
    })
)

//pipeline syntax

fromPromise(fetch('/user',...).then(res=>res.json()))
    |> mapPromise((user)=>fetch('/products',{
        data:user
       }).then(res=>res.json()))
    |> forEach((data)=>{
       console.log(data)
    })

```

### LICENSE

The MIT License (MIT)

Copyright (c) 2018 JanryWang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.