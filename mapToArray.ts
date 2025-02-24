// 创建一个示例 Map
const exampleMap = new Map<number, AgentInfo[]>();
exampleMap.set(1, [{ agentId: 1, skillList: [{    skillId: 1,    name: 'data1'  }, {    skillId: 2,    name: 'data2'  }]}]);
exampleMap.set(3, [{ agentId: 3, skillList: [{    skillId: 3,    name: 'data3'  }, {    skillId: 2,    name: 'data2'  }]}]);
exampleMap.set(2, [{ agentId: 1, skillList: [{    skillId: 1,    name: 'data1'  }, {    skillId: 2,    name: 'data2'  }]}, 
    { agentId: 3, skillList: [{    skillId: 1,    name: 'data1'  }, {    skillId: 2,    name: 'data2'  }]}]);

// 定义类型以确保类型安全
type AgentInfo = {
    agentId: number;
    skillList: SkillInfo[];
};

type SkillInfo = {
    skillId: number;
    name: string;
};

// 将 Map 转换为数组
function mapToArray(map: Map<number, AgentInfo[]>): AgentInfo[] {
    const resultArray: AgentInfo[] = [];
    const seenAgentIds = new Set<number>();

    map.forEach((value) => {
        value.forEach((agentInfo) => {
            if (!seenAgentIds.has(agentInfo.agentId)) {
                seenAgentIds.add(agentInfo.agentId);
                resultArray.push(agentInfo);
            }
        });
    });

    return resultArray;
}


// 使用示例
const convertedArray = mapToArray(exampleMap);
console.log(convertedArray);
