import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, updateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {

    }

    findUsers() {
        try{
            return this.userRepository.find();
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error fetching users');
        }
    }

    findUser(email: string) : Promise<User | undefined> {
        try{
            return this.userRepository.findOneBy({ email })
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error fetching user');
        }
    }

    createUser(userDetails: CreateUserParams) {
        try {
            const newUser = this.userRepository.create({
                ...userDetails,
                createdAt: new Date(),
            });
            return this.userRepository.save(newUser);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error creating user');
        }
    }

    updateUser(id: number, updateUserDetails: updateUserParams){
        try {
            return this.userRepository.update({ id }, { ...updateUserDetails });
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error updating user');
        }
    }

    deleteUser(id: number){
        try{
            return this.userRepository.delete({ id });
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Error deleting user');
        }
    }
}
