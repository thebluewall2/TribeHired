import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const PostComments = ({ comment }) => {
    const { email, name, body } = comment;

    return (
        <View style={styles.commentContainer}>
            <Text style={styles.commentNameText}>
                {name}
            </Text>

            <Text style={styles.commentEmailText}>
                {email}
            </Text>

            <Text style={styles.commentBodyText}>
                {body}
            </Text>
        </View>
    )
}

export default PostComments;