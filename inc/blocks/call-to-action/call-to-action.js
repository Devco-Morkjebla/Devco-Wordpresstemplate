( function( blocks, editor, element ) {
	var el = element.createElement;

	blocks.registerBlockType( 'devco/call-to-action', {
		title: 'Test', // The title of block in editor.
		icon: 'dashicons-schedule', // The icon of block in editor.
		category: 'common', // The category of block in editor.
		attributes: {
            content: {
                type: 'string',
                default: 'testr.'
            },
            button: {
                type: 'string',
                default: 'Join Today'
            }
        },
		edit: function( props ) {
            return (
                el( 'div', { className: props.className },
                    el(
                        editor.RichText,
                        {
                            tagName: 'div',
                            className: 'devco-call-to-action-content',
                            value: props.attributes.content,
                            onChange: function( content ) {
                                props.setAttributes( { content: content } );
                            }
                        }
                    ),
                    el(
                        editor.RichText,
                        {
                            tagName: 'span',
                            className: 'devco-call-to-action-button',
                            value: props.attributes.button,
                            onChange: function( content ) {
                                props.setAttributes( { button: content } );
                            }
                        }
                    ),
                )
            );
        },
		save: function( props ) {
            return (
                el( 'div', { className: props.className },
                    el( editor.RichText.Content, {
                        tagName: 'p',
                        className: 'devco-call-to-action-content',
                        value: props.attributes.content,
                    } ),
                    el( 'button', { className: 'devco-call-to-action-button' },
                        props.attributes.button
                    )
                )
            );
        },
	} );
} )( window.wp.blocks, window.wp.editor, window.wp.element );