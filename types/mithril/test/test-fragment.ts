import * as m from 'mithril';
import {Vnode} from 'mithril/';
import * as h from 'mithril/hyperscript';

const vnode = m.fragment({id: 'abc'}, ['test']);

m.fragment({}, ['Test', 123]);

m.fragment(
	{
		id: 'abc',
		oninit: (vnode: Vnode<any, any>) => {
			console.log('oninit');
		}
	},
	[h('p', 'test1'), [123, h('p', 'abc'), ['abc']], 'Abc', h('p', 'test2')]
);
