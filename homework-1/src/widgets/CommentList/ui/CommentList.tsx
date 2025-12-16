import React, { useState, useCallback } from 'react';
import { useGetCommentsByPostQuery } from '../../../entities/comments/api/commentsApi'; 
import styles from './CommentList.module.css';


type Props = {
  postId: number;
};

function CommentList({ postId }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  
  const { data: comments = [], isLoading } = useGetCommentsByPostQuery(postId);

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
          {isLoading && <p>Загрузка комментариев...</p>}
          {!isLoading && comments.map(comment => (
            <div key={comment.id} className={styles.commentItem}>
              <p className={styles.text}>{comment.body}</p>
              <small className={styles.author}>
                {comment.name} ({comment.email})
              </small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CommentList