import React from 'react';

const Message = ({
	setMsgRead,
	key,
	id,
	selected,
	read,
	starred,
	subject,
	checkedToggle,
	starToggle,
	body,
	labels
}) => {
	const isRead = read ? 'row message read' : 'row message unread';
	const isStarred = starred ? 'fas fa-star' : 'far fa-star';
	const isSelected = selected ? ' selected' : '';
	const labeled = labels.map((label, i) => {
		return (
			<span key={i} className='label label-warning'>
				{label}
			</span>
		);
	});

	return (
		<div>
			<div className={isRead + isSelected}>
				<div className='col-xs-1'>
					<div className='row'>
						<div className='col-xs-2'>
							<input
								onClick={e => checkedToggle(id, e)}
								type='checkbox'
								checked={selected}
							/>
						</div>
						<div className='col-xs-2'>
							<i onClick={() => starToggle(id)} className={isStarred} />
						</div>
					</div>
				</div>
				<div
					data-toggle='collapse'
					href={'#' + id}
					aria-expanded='false'
					aria-controls=''
					onClick={e => setMsgRead(id, e)}
					className='col-xs-11'
				>
					{labeled}
					<a href='#'>
						<p>{subject}</p>
					</a>
				</div>
			</div>

			<div className='collapse' id={id}>
				<div className='well'>{body}</div>
			</div>
		</div>
	);
};

export default Message;
