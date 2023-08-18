import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const SaveBlock = ( { attributes } ) => {
	const { containerSize, backgroundColor, bgImageURL } = attributes;

	return (
		<section
			{ ...useBlockProps.save( {
				style: {
					backgroundColor: backgroundColor,
					backgroundImage: `url(${ bgImageURL })`,
				},
			} ) }
			className="features"
		>
			<div className={ `container -${ containerSize }` }>
				<InnerBlocks.Content />
			</div>
		</section>
	);
};

export default SaveBlock;
