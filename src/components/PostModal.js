import React from 'react';

const PostModal = (props) => {
    return (
        <center>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
														<div class="modal-dialog">
															<div class="modal-content">
															<div class="modal-header">
																<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
																<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
															</div>
															<div class="modal-body">
																		<div style={{ marginTop: '2rem' }}>
																			{props.posts && props.posts.length
																				? props.posts.map((post) => {
																					return (
																						<div
																							style={{
																								border: '1px solid #ccc',
																								padding: '0.5rem',
																								width: '40%',
																								margin: '2px',
																							}}>
																							<button>X</button>
																							<br/>
																							{post}
																						</div>
																					);
																				})
																			: null}
																		</div>
															</div>
															<div class="modal-footer">
																<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
																<button type="button" class="btn btn-primary">Save changes</button>
															</div>
															</div>
														</div>
					  </div> {/* end of bs */}
        </center>
    )
}

export default PostModal;
