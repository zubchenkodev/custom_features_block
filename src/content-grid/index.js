import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import '../style.scss';

import SaveBlock from './save';
import EditBlock from './edit';

registerBlockType( 'viktorias-blocks/content-grid', {
	title: __( 'Content Block', 'viktorias-blocks' ),
	category: 'text',
	icon: 'grid-view',
	description: __( 'Content block', 'viktorias-blocks' ),
	parent: [ 'viktorias-blocks/features' ],
	supports: {
		html: false,
	},
	attributes: {
		columns: {
			type: 'number',
			default: 1,
		},
		layoutType: {
			type: 'string',
			default: 'layout-equal',
		},
	},
	edit: EditBlock,
	save: SaveBlock,
} );
