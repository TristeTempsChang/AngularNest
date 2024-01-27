import { Body, Controller, Delete, Get, InternalServerErrorException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UpdateUserDto } from './dtos/UpdateUser.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/typeorm/entities/User';
import { GetUserDto } from './dtos/getUser.dto';

@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    //For getting a list of all users
    @Get('getUsers')
    @ApiOkResponse({description: 'Display all users of the app'})
    getUsers(){
        return this.userService.findUsers();
    }


    //For registering user
    @Post('signUp')
    @ApiCreatedResponse({
        description: 'User successfully created',
        type: User
    })
    signup(@Body() createUserDto: CreateUserDto){
        try {
            return this.userService.createUser(createUserDto);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException('Internal server error');
        }
    }


    //For updating user profile (replace with patch if yu want to update partially user, put update all the repository)
    @Put(':id')
    async updateUserById(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto
        ){
        await this.userService.updateUser(id, updateUserDto)
    }


    // For deleting user profile
    @Delete(':id')
    async deleteUserById(
        @Param('id', ParseIntPipe) id: number
        ){
        await this.userService.deleteUser(id)
    }


    // For get an user by his email
    @Post('getUserByEmail')
    @ApiOkResponse({description: 'Display an user of the app by his email'})
    getUser(@Body() getUserDto: GetUserDto){
        try {
            return this.userService.findUser(getUserDto.email);
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException("Cet utilisateur est introuvable...");
        }
    }


}
