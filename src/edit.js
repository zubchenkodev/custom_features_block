import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
	MediaPlaceholder,
} from '@wordpress/block-editor';

import { PanelBody, SelectControl, Button } from '@wordpress/components';

import './editor.scss';

const EditBlock = ( { attributes, setAttributes } ) => {
	const {
		containerSize,
		backgroundColor,
		bgImageURL,
		bgImageID,
		bgImageAlt,
	} = attributes;

	const onSelectContainerSize = ( selectedSize ) => {
		setAttributes( { containerSize: selectedSize } );
	};

	const onChangeBackgroundColor = ( field, newColor ) => {
		setAttributes( { [ field ]: newColor } );
	};

	const onSelectImage = ( bgImage ) => {
		if ( ! bgImage || ! bgImage.url ) {
			setAttributes( {
				bgImageURL: undefined,
				bgImageID: undefined,
				bgImageAlt: '',
			} );
			return;
		}
		setAttributes( {
			bgImageURL: bgImage.url,
			bgImageID: bgImage.id,
			bgImageAlt: bgImage.alt,
		} );
	};

	const removeBgImage = () => {
		setAttributes( {
			bgImageURL: undefined,
			bgImageID: undefined,
			bgImageAlt: '',
		} );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<SelectControl
						label={ __(
							'Select Container Size',
							'viktorias-block'
						) }
						value={ containerSize }
						options={ [
							{
								label: __( 'Small', 'viktorias-block' ),
								value: 'small',
							},
							{
								label: __( 'Medium', 'viktorias-block' ),
								value: 'medium',
							},
							{
								label: __( 'Big', 'viktorias-block' ),
								value: 'big',
							},
							{
								label: __( 'Fluid', 'viktorias-block' ),
								value: 'fluid',
							},
						] }
						onChange={ onSelectContainerSize }
					/>
				</PanelBody>

				<PanelBody
					title={ __( 'Background Image', 'viktorias-block' ) }
				>
					{ bgImageURL && (
						<div>
							<img src={ bgImageURL } alt={ bgImageAlt } />
						</div>
					) }
					<MediaPlaceholder
						labels={ {
							title: __( 'Background Image' ),
							instructions: __(
								'Drag and drop onto this block, upload, or select existing media from your library.'
							),
						} }
						onSelect={ onSelectImage }
						onSelectURL={ ( val ) => console.log( val ) }
						onError={ ( err ) => console.log( err ) }
						accept="image/*"
						allowedTypes={ [ 'image' ] }
						disableMediaButtons={ bgImageURL }
					/>
					<Button isDestructive onClick={ removeBgImage }>
						{ __( 'Remove', 'viktorias-block' ) }
					</Button>
				</PanelBody>

				<PanelColorSettings
					title={ __( 'Heading Color Settings', 'viktorias-block' ) }
					icon="admin-appearance"
					initialOpen
					disableCustomColors={ false }
					colorSettings={ [
						{
							value: backgroundColor,
							onChange: ( value ) =>
								onChangeBackgroundColor(
									'backgroundColor',
									value
								),
							label: __( 'Background Color', 'viktorias-block' ),
						},
					] }
				/>
			</InspectorControls>
			<section
				{ ...useBlockProps( {
					style: {
						backgroundColor: backgroundColor,
						backgroundImage: `url(${ bgImageURL })`,
					},
				} ) }
				className="features"
			>
				<div className={ `container -${ containerSize }` }>
					<InnerBlocks
						allowedBlocks={ [
							'viktorias-blocks/heading-block',
							'viktorias-blocks/content-block',
						] }
						template={ [ [ 'viktorias-blocks/heading-block' ] ] }
					></InnerBlocks>
				</div>
			</section>
		</>
	);
};

export default EditBlock;
