import React, { useState, useCallback } from 'react';
import styles from './CommentList.module.css';

type Comment = {
  id: number;
  text: string;
};

type CommentListProps = {
  comments: Comment[];
};

function CommentList({ comments }: CommentListProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleComments = useCallback(() => {
    setIsCollapsed(prev => !prev);
  }, []);

  return (
    <div className={styles.wrapper}>
      <button className={styles.buttonShowComment} onClick={toggleComments}>
        {isCollapsed ? 'Показать комментарии' : 'Скрыть комментарии'}
      </button>

      {!isCollapsed && (
        <div className={styles.commentList}>
          {comments.map(comment => (
            <div key={comment.id} className={styles.commentItem}>
              <p className={styles.text}>{comment.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CommentList;