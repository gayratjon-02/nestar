import { ObjectId } from 'bson';

export const availableAgentSorts = ['createdAt', 'updatedAt', 'memberLikes', "memberViews", "memberRank"];

export const shapeIntoMongoObjectId = (target: any) => {
	return typeof target === 'string' ? new Object(target) : target;
};
