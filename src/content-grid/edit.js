import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	InnerBlocks,
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
	Panel,
	PanelBody,
	PanelRow,
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
	const { columns, layoutType } = attributes;

	const setColumns = ( value ) => {
		setAttributes( { columns: value } );
	};

	const onChangeLayout = (value) => {
		setAttributes( { layoutType: value } );
	}

	const ALLOWED_BLOCKS = [ 'core/image', 'core/paragraph', 'viktorias-blocks/content-block'];

	const MY_TEMPLATE = [
		[ 'core/image', {} ],
		[ 'core/paragraph', { placeholder: 'Summary' } ],
		[ 'viktorias-blocks/text-block', { placeholder: 'My text' } ],
	];

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Content Layout Settings', 'viktorias-block' ) }
				>
					<RangeControl
						label={ __( 'Number of columns', 'viktorias-block' ) }
						value={ columns }
						onChange={ setColumns }
						min={ 1 }
						max={ 3 }
					/>
					{ columns === 2 && (
						<SelectControl
							label={ __( 'Layout options', 'viktorias-block' ) }
							value={ layoutType }
							options={ [
								{ label: 'Equal columns', value: 'layout-equal' },
								{ label: 'Left column wider', value: 'layout-left' },
								{ label: 'Right column wider', value: 'layout-right' },
							] }
							onChange={ onChangeLayout }
						/>
					) }
				</PanelBody>
			</InspectorControls>
			<div
				{ ...useBlockProps( {
					className: `content -has-${ columns }-columns -${columns === 2 && layoutType}`,
				} ) }
			>
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS }
					template={ MY_TEMPLATE }
				></InnerBlocks>
			</div>
		</>
	);
};

export default EditBlock;
