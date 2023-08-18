import { useBlockProps, RichText } from '@wordpress/block-editor';

const SaveBlock = ( { attributes } ) => {
	const {
		alignment,
		headingBackgroundColor,
		headingLabel,
		headingTitle,
		titleTag,
		headingLead,
		headingDescription,
		titleTextColor,
		labelTextColor,
		leadTextColor,
		descriptionTextColor,
		headingBorder,
		rounded,
	} = attributes;

	return (
		<div
			{ ...useBlockProps.save( {
				className: `heading -text-align-${ alignment } ${
					headingBorder ? '-with-border' : null
				} ${ rounded ? '-rounded' : null }`,
				style: { backgroundColor: headingBackgroundColor },
			} ) }
		>
			{ headingLabel && (
				<RichText.Content
					className="heading__label"
					tagName="p"
					value={ headingLabel }
					style={ { color: labelTextColor } }
				/>
			) }
			{ headingTitle && (
				<RichText.Content
					className="heading__title title"
					tagName={ titleTag }
					value={ headingTitle }
					style={ { color: titleTextColor } }
				/>
			) }
			{ headingLead && (
				<RichText.Content
					className="heading__lead"
					tagName="h2"
					value={ headingLead }
					style={ { color: leadTextColor } }
				/>
			) }
			{ headingDescription && (
				<RichText.Content
					className="heading__description"
					tagName="p"
					value={ headingDescription }
					style={ { color: descriptionTextColor } }
				/>
			) }
		</div>
	);
};

export default SaveBlock;
