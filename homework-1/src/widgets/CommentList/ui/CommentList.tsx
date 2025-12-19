import React, { useState, useCallback } from 'react';
import type { ReactElement, MouseEventHandler } from 'react';
import { useGetCommentsByPostQuery } from '../../../entities/comments/api/commentsApi'; 
import styles from './CommentList.module.css';
import type { Comment } from '../../../entities/comments/model/types';

type Props = {
  postId: number;
};

function CommentList({ postId }: Props): ReactElement {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const { data: comments = [], isLoading } = useGetCommentsByPostQuery(postId);

  const toggleComments: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
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
          {!isLoading && comments.map((comment: Comment) => (
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

export default CommentList;
