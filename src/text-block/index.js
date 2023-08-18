import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import '../style.scss';

import SaveBlock from './save';
import EditBlock from './edit';

registerBlockType( 'viktorias-blocks/text-block', {
	title: __( 'Text Block', 'viktorias-blocks' ),
	category: 'text',
	icon: 'welcome-write-blog',
	description: __( 'Text block', 'viktorias-blocks' ),
	parent: [ 'viktorias-blocks/content-blocks' ],
	supports: {
		html: false,
		reusable: true,
	},
	edit: EditBlock,
	save: SaveBlock,
} );
