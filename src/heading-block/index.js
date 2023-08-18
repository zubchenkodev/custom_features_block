import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import '../style.scss';

import SaveBlock from './save';
import EditBlock from './edit';

registerBlockType( 'viktorias-blocks/heading-block', {
	title: __( 'Heading Block', 'viktorias-blocks' ),
	category: 'text',
	icon: 'superhero-alt',
	description: __( 'Heading fields for each block', 'viktorias-blocks' ),
	parent: [ 'viktorias-blocks/features' ],
	supports: {
		html: false,
		spacing: {
			padding: true,
		},
	},
	attributes: {
		alignment: {
			type: 'string',
			default: 'left',
		},
		headingLabel: {
			type: 'string',
			tag: 'p',
			source: 'html',
			selector: '.heading__label',
		},
		headingTitle: {
			type: 'string',
			source: 'html',
			selector: '.heading__title',
		},
		titleTag: {
			type: 'string',
			default: 'h2',
		},
		headingLead: {
			type: 'string',
			tag: 'h5',
			source: 'html',
			selector: '.heading__lead',
		},
		headingDescription: {
			type: 'string',
			tag: 'p',
			source: 'html',
			selector: '.heading__description',
		},
		labelTextColor: {
			type: 'string',
			default: '#4724db',
		},
		titleTextColor: {
			type: 'string',
			default: '#4724db',
		},
		leadTextColor: {
			type: 'string',
			default: '#4724db',
		},
		descriptionTextColor: {
			type: 'string',
			default: '#4724db',
		},
		headingBackgroundColor: {
			type: 'string',
		},
		headingBorder: {
			type: 'boolean',
		},
		rounded: {
			type: 'boolean',
		},
	},
	edit: EditBlock,
	save: SaveBlock,
} );
