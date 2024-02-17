import { Injectable } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Agent } from 'http';
import { Repository } from 'typeorm';
// import { Agent } from '.entities/agent.entity';

@Injectable()
export class AgentService {
  constructor(
    @InjectRepository(Agent)
    private readonly agentRepository: Repository<Agent>,
  ){}

  create(createAgentDto: CreateAgentDto) {
    return this.agentRepository.create(createAgentDto);
    // return 'This action adds a new agent';
  }

  findAll() {
    return this.agentRepository.find();
    // return `This action returns all agent`;
  }

  findOne(id: number) {
    // return this.agentRepository.findOneBy({id});
    return `This action returns a #${id} agent`;
  }

  update(id: number, updateAgentDto: UpdateAgentDto) {
    return this.agentRepository.update(id, updateAgentDto);
    // return `This action updates a #${id} agent`;
  }

  remove(id: number) {
    return this.agentRepository.delete(id);
    // return `This action removes a #${id} agent`;
  }
}
