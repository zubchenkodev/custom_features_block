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
} from '@wordpress/components';

import '../editor.scss';

const EditBlock = ( { attributes, setAttributes } ) => {
	const {
		alignment,
		headingBackgroundColor,
		headingLabel,
		headingTitle,
		titleTag,
		headingLead,
		headingDescription,
		labelTextColor,
		titleTextColor,
		leadTextColor,
		descriptionTextColor,
		headingBorder,
		rounded,
	} = attributes;

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};

	const onChangeText = ( field, newValue ) => {
		setAttributes( { [ field ]: newValue } );
	};

	const onSelectTitleTag = ( newTitleTag ) => {
		setAttributes( { titleTag: newTitleTag } );
	};

	const onChangeTextColor = ( field, newTextColor ) => {
		setAttributes( { [ field ]: newTextColor } );
	};

	const toggleBorder = () => {
		setAttributes( { headingBorder: ! headingBorder } );
	};

	const toggleRounded = () => {
		setAttributes( { rounded: ! rounded } );
	};

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Heading Color Settings', 'viktorias-block' ) }
					icon="admin-appearance"
					initialOpen
					disableCustomColors={ false }
					colorSettings={ [
						{
							value: headingBackgroundColor,
							onChange: ( value ) =>
								onChangeTextColor(
									'headingBackgroundColor',
									value
								),
							label: __(
								'Heading Background Color',
								'viktorias-block'
							),
						},
						{
							value: labelTextColor,
							onChange: ( value ) =>
								onChangeTextColor( 'labelTextColor', value ),
							label: __( 'Label Text Color', 'viktorias-block' ),
						},
						{
							value: titleTextColor,
							onChange: ( value ) =>
								onChangeTextColor( 'titleTextColor', value ),
							label: __( 'Title Text Color', 'viktorias-block' ),
						},
						{
							value: leadTextColor,
							onChange: ( value ) =>
								onChangeTextColor( 'leadTextColor', value ),
							label: __( 'Lead Text Color', 'viktorias-block' ),
						},
						{
							value: descriptionTextColor,
							onChange: ( value ) =>
								onChangeTextColor(
									'descriptionTextColor',
									value
								),
							label: __(
								'Description Text Color',
								'viktorias-block'
							),
						},
					] }
				/>
				<PanelBody
					title={ __( 'Heading Settings', 'viktorias-block' ) }
				>
					<SelectControl
						label={ __( 'Select Title Tag', 'viktorias-block' ) }
						value={ titleTag }
						options={ [
							{
								label: __( 'Heading 2', 'viktorias-block' ),
								value: 'h2',
							},
							{
								label: __( 'Heading 3', 'viktorias-block' ),
								value: 'h3',
							},
						] }
						onChange={ onSelectTitleTag }
					/>
					<SelectControl
						label={ __(
							'Select Heading Alingment',
							'viktorias-block'
						) }
						value={ alignment }
						options={ [
							{
								label: __( 'Left', 'viktorias-block' ),
								value: 'left',
							},
							{
								label: __( 'Center', 'viktorias-block' ),
								value: 'center',
							},
							{
								label: __( 'Right', 'viktorias-block' ),
								value: 'right',
							},
						] }
						onChange={ onChangeAlignment }
					/>
					<ToggleControl
						label="Heading Border"
						help={ headingBorder ? 'Has border.' : 'No border.' }
						checked={ headingBorder }
						onChange={ toggleBorder }
					/>

					<ToggleControl
						label="Rounded"
						help={ rounded ? 'Is rounded.' : 'Is not rounded.' }
						checked={ rounded }
						onChange={ toggleRounded }
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls />
			<div
				{ ...useBlockProps( {
					className: `heading -text-align-${ alignment } ${
						headingBorder ? '-with-border' : null
					} ${ rounded ? '-rounded' : null }`,
					style: { backgroundColor: headingBackgroundColor },
				} ) }
			>
				<RichText
					className="heading__label"
					tagName="p"
					title={ __( 'Block Label', 'viktorias-block' ) }
					placeholder={ __( 'Enter the label', 'viktorias-block' ) }
					allowedFormats={ [] }
					value={ headingLabel }
					onChange={ ( newLabel ) =>
						onChangeText( 'headingLabel', newLabel )
					}
					style={ { color: labelTextColor } }
				/>
				<div className="heading__controls"></div>

				<RichText
					className="heading__title title"
					tagName={ titleTag }
					title={ __( 'Block Title', 'viktorias-block' ) }
					placeholder={ __( 'Enter the title', 'viktorias-block' ) }
					allowedFormats={ [] }
					value={ headingTitle }
					onChange={ ( newTitle ) =>
						onChangeText( 'headingTitle', newTitle )
					}
					style={ { color: titleTextColor } }
				/>
				<RichText
					className="heading__lead"
					tagName="h5"
					title={ __( 'Block Lead', 'viktorias-block' ) }
					placeholder={ __( 'Enter the lead', 'viktorias-block' ) }
					allowedFormats={ [] }
					value={ headingLead }
					onChange={ ( newLead ) =>
						onChangeText( 'headingLead', newLead )
					}
					style={ { color: leadTextColor } }
				/>
				<RichText
					className="heading__description"
					tagName="p"
					title={ __( 'Block Description', 'viktorias-block' ) }
					placeholder={ __(
						'Enter the description',
						'viktorias-block'
					) }
					allowedFormats={ [] }
					value={ headingDescription }
					onChange={ ( newDescription ) =>
						onChangeText( 'headingDescription', newDescription )
					}
					style={ { color: descriptionTextColor } }
				/>
			</div>
		</>
	);
};

export default EditBlock;
