import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Users} from 'src/typeorm/entities/user.entity';
import {Repository, UpdateResult} from 'typeorm';
import {User} from "../models/user.model";
import * as bcrypt from 'bcrypt';
import {Carts} from "../typeorm/entities/cart.entity";


@Injectable()
    export class UsersService {

    private readonly logger = new Logger(UsersService.name);

    constructor(@InjectRepository(Users) private readonly usersRepository: Repository<Users>
                ) {
    }

    async findAll(): Promise<Users[]>{
        return this.usersRepository.find();
    }

    async findById(id: number): Promise<Users>{
        return this.usersRepository.findOneBy({id: id});
    }

    async create(user: User): Promise<any> {
        const hashedPassword = this.hashPassword(user.password_hash);
        user.password_hash = await hashedPassword;
        const savedUser = await this.usersRepository.save(user);
        const cart = new Carts();
       cart.user = savedUser;
        return savedUser;
    }

    async login(user: User): Promise<any> {
        const userfound = await this.usersRepository.findOneBy({email: user.email});
        this.logger.log(userfound.email);
        if(user && await userfound.comparePassword(user.password_hash)){
            return userfound;
        }
        return null;
    }

    async update(user: Users): Promise<UpdateResult> {
        return await this.usersRepository.update(user.id, user);
    }
        

    async delete(id: number): Promise<any> {
        return this.usersRepository.delete(id);
    }

    async hashPassword(plainPassword: string) {
        // import * as bcrypt from 'bcrypt';
        const saltRounds = 10; // Number of salt rounds for hashing


        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

        this.logger.log('Hashed Password:', hashedPassword);
        return hashedPassword;
    }
}
