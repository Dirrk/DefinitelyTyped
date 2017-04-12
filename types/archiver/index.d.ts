// Type definitions for archiver v1.3.0
// Project: https://github.com/archiverjs/node-archiver
// Definitions by: Esri <https://github.com/archiverjs/node-archiver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

    import Archiver = require('archiver);
    var archiver = Archiver.create('zip');
    archiver.pipe(FS.createWriteStream('xxx'));
    archiver.append(FS.createReadStream('xxx'));
    archiver.finalize();

 =============================================== */

/// <reference types="node" />

import * as FS from 'fs';
import * as STREAM from 'stream';


declare function archiver(format: string, options?: archiver.Options): archiver.Archiver;

declare namespace archiver {

    export function create(format: string, options?: Options): Archiver;


    export interface nameInterface {
        name?: string;
    }

    export interface Archiver extends STREAM.Transform {
        append(source: STREAM.Readable | Buffer | string, name: nameInterface): void;

        directory(dirpath: string, destpath: nameInterface | string): void;
        directory(dirpath: string, destpath: nameInterface | string, data: any | Function): void;
        
        file(filepath: string, data: EntryData): void;
        glob(pattern: string, options: any, data: EntryData): void;

        bulk(mappings: any): void;
        finalize(): void;
    }

    export interface Options {
        statConcurrency?: number;
    }
    
    export interface EntryData {
        name: string;
        date?: string | Date;
        mode?: number;
        prefix?: string;
        stats?: FS.Stats;
    }
    
    export interface ZipEntryData extends EntryData {
        store?: boolean;
    }
    
    export interface TarEntryData extends EntryData {
    }
}

export = archiver;
