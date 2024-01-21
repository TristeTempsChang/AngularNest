import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UpdateUserDto } from './dtos/UpdateUser.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/typeorm/entities/User';

@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    //For getting a list of all users
    @Get('getUser')
    @ApiOkResponse({description: 'Display all users of the app'})
    getUser(){
        return this.userService.findUsers();
    }


    //For registering user
    @Post('signUp')
    @ApiCreatedResponse({
        description: 'User successfully created',
        type: User
    })
    signup(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);
    }


    //For updating user profile (replace with patch if yu want to update partially user, put update all the repository)
    @Put(':id')
    async updateUserById(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto
        ){
        await this.userService.updateUser(id, updateUserDto)
    }

    @Delete(':id')
    async deleteUserById(
        @Param('id', ParseIntPipe) id: number
        ){
        await this.userService.deleteUser(id)
    }
}
