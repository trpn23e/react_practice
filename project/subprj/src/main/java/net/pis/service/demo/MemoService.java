package net.pis.service.demo;

/**
 * Created by PARKIS on 2018-07-31.
 */

import lombok.extern.slf4j.Slf4j;
import net.pis.dao.MemoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Service
@Slf4j
public class MemoService {

    @Autowired
    PlatformTransactionManager db1TransactionManager;

    @Autowired
    private MemoMapper memoMapper;

    @Transactional(value="db1TransactionManager")
    public HashMap<String, Object> updateMemo(Map<String, Object> paramMap) {
        HashMap<String, Object> result = new HashMap<>();
        //Mybatis
        int no = memoMapper.updateMemo(paramMap);
        result.put("test", no);

        return result;
    }
}
