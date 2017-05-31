import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
    it('handles action with unknown type', () => {
        const result = commentReducer(undefined, {});
        expect(result).to.be.instanceof(Array);
        expect(result).to.have.length(0);
    });
    it('handles action of type SAVE_COMMENT', () => {
        const action = { type: SAVE_COMMENT, payload: 'new comment'};
        const result = commentReducer([], action);
        expect(result).to.be.instanceof(Array);
        expect(result).to.have.length(1);
        expect(result[0]).to.equal('new comment');
    });
});
