// Copyright 2013 Joyent, Inc.  All rights reserved.
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import * as browserFs from './browserFs'

///--- Exports

export function setBrowserFs(BFS) {
    (browserFs as any).BFS = BFS
}

export * from './mount'
export * from './nfs'