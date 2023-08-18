import { useBlockProps, RichText } from '@wordpress/block-editor';

const SaveBlock = ( { attributes } ) => {
	const {} = attributes;

	return (
		<div { ...useBlockProps.save( {} ) }>
			
		</div>
	);
};

export default SaveBlock;
