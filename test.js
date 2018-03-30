import test from "ava"
import { fromPromise, pipe, forEach } from "callbag-basics"
import mapPromise from "./lib"

const fetchUser = name => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name
            })
        }, 1000)
    })
}

const fetchFriends = user => {
    return new Promise((resolve, reject) => {
        if (user.name === "janry") {
            resolve(["aaa", "bbb"])
        } else {
            resolve(["aaa"])
        }
    })
}

test.cb("normal", t => {
    fromPromise(fetchUser("janry"))
        |> mapPromise(user => fetchFriends(user))
        |> forEach(friends => {
            t.deepEqual(friends, ["aaa", "bbb"])
            t.end()
        })

    fromPromise(fetchUser("judicy"))
        |> mapPromise(user => fetchFriends(user))
        |> forEach(friends => {
            t.deepEqual(friends, ["aaa"])
            t.end()
        })
})
