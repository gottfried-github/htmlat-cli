#! /usr/bin/env node

import {convertFile} from 'htmlat-nodejs'

function mapArgs(args) {
    // const io = process.argv.slice(2, 4), rest = process.argv.slice(4)

    const o = args.reduce((opts, arg, i) => {
        if (arg.match('^--')) {
            if (0 === Object.keys(opts).length) {
                opts.prefix = args.slice(0, i)
            }

            opts[arg] = -1 === args.slice(i+1).findIndex(v => v.match('^--'))
                ? args.slice(i+1)
                : args.slice(i+1, i+args.slice(i+1).findIndex(v => v.match('^--'))+1)

            return opts
        }; return opts
    }, {})

    if (0 === Object.keys(o).length && args.length) o.prefix = args
    return o
}

function main() {
    const args = mapArgs(process.argv.slice(2))

    convertFile(args.prefix[0] || null, args.prefix[1] || null, args.prefix[2] || null)
}

main()

export {
    main, mapArgs
}
