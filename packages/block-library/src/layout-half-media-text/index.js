/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	BlockAlignmentToolbar,
	InnerBlocks,
} from '@wordpress/editor';

const MEDIA_POSITIONS = [ 'left', 'right' ];

export const name = 'core/half-media';

export const settings = {
	title: __( 'Half Media' ),

	icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0,0h24v24H0V0z" fill="none" /><rect x="3" y="13" width="8" height="2" /><rect x="3" y="17" width="8" height="2" /><rect x="3" y="9" width="8" height="2" /><rect x="3" y="5" width="8" height="2" /><path d="m19 7v10h-4v-10h4m2-2h-8v14h8v-14z" /></svg>,

	category: 'layout',

	attributes: {
		mediaPosition: {
			type: 'string',
			default: 'left',
		},
	},

	supports: {
		align: [ 'wide', 'full' ],
	},

	edit( { attributes, setAttributes } ) {
		return (
			<div className={ classnames(
				'half-media',
				{ 'has-media-on-the-right': 'right' === attributes.mediaPosition }
			) }>
				<BlockControls>
					<BlockAlignmentToolbar
						controls={ MEDIA_POSITIONS }
						value={ attributes.mediaPosition }
						onChange={ ( mediaPosition ) => setAttributes( { mediaPosition } ) }
					/>
				</BlockControls>
				<InnerBlocks
					template={ [
						[ 'core/half-media-media-area' ],
						[ 'core/half-media-content-area' ],
					] }
					templateLock="all"
				/>
			</div>
		);
	},

	save( { attributes } ) {
		return (
			<div className={ classnames(
				'half-media',
				{ 'has-media-on-the-right': 'right' === attributes.mediaPosition }
			) }>
				<InnerBlocks.Content />
			</div>
		);
	},
};
