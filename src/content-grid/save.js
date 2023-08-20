import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

const SaveBlock = ( { attributes } ) => {
	const {} = attributes;

	return (
		<div { ...useBlockProps.save( {} ) }>
			<InnerBlocks.Content />
		</div>
	);
};

export default SaveBlock;
