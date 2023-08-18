import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
} from '@wordpress/block-editor';

import {
	Spinner,
	withNotices,
	ToolbarButton,
	PanelBody,
	TextareaControl,
	SelectControl,
	Icon,
	Tooltip,
	TextControl,
	Button,
	ColorPalette,
	ToggleControl,
	RangeControl,
} from '@wordpress/components';

import '../editor.scss';

const EditBlock = ( { attributes, setAttributes } ) => {
	const {} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Text Settings', 'viktorias-block' ) }
				></PanelBody>
			</InspectorControls>
			<div
				{ ...useBlockProps( {
					className: `text`,
				} ) }
			>
			</div>
		</>
	);
};

export default EditBlock;
