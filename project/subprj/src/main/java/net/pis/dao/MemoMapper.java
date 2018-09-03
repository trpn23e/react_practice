package net.pis.dao;

import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

/**
 * Mybatis Mapper 클래스 예제
 */
@Component
@Slf4j
public class MemoMapper {

    @Autowired
    @Qualifier("db1SqlSessionTemplate")
    //private SqlSessionTemplate sqlSessionTemplate;
    private SqlSession sqlSession;

    public int updateMemo (Map<String, Object> params) {
        int updated = -1;
        int existCnt = 0;
        existCnt = sqlSession.selectOne("net.pis.mapper.MemoMapper.existMemoCnt", params);

        if (existCnt > 0) {
            updated = sqlSession.update("net.pis.mapper.MemoMapper.updateMemo", params);
        } else {
            updated = sqlSession.insert("net.pis.mapper.MemoMapper.insertMemo", params);
        }

        return updated;
    }
}
