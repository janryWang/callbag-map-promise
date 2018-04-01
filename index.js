import flatMap from 'callbag-flat-map'
import fromPromise from 'callbag-from-promise'

const transfer = (data)=>(type,d)=>{
    if(type !== 0) return
    d(0,()=>{})
    d(1,data)
}

export default (fn,endpoint)=>source=>{
    return flatMap(d=>{
        d = fn(d)
      return d instanceof Promise ? fromPromise(d) : transfer(d)
    })(source)
}