import pipe from 'callbag-pipe'
import map from 'callbag-map'
import flatten from 'callbag-flatten'
import fromPromise from 'callbag-from-promise'

export default fn=>source=>{
    return pipe(
        source,
        map((d)=>{
          d = fn(d)
          return d instanceof Promise ? fromPromise(d) : d
        }),
        flatten
    )
}