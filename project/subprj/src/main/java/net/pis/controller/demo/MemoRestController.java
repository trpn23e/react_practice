package net.pis.controller.demo;

import lombok.extern.slf4j.Slf4j;
import net.pis.common.Direction;
import net.pis.common.JSONResponse;
import net.pis.common.JmsSender;
import net.pis.common.Listener;
import net.pis.controller.jms.JmsAdaptingController;
import net.pis.message.MessageMetaInfo;
import net.pis.service.demo.MemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.jms.JMSException;
import javax.servlet.http.HttpServletRequest;
import java.util.*;
/**
 * Created by PARKIS on 2018-07-30.
 * Title : Rest 컨트롤러
 */

@RestController
@Slf4j
public class MemoRestController {

    @Autowired
    private MemoService memoService;

    // Test JMS Controller
    @Autowired
    private JmsAdaptingController jmsAdaptingController;

    @RequestMapping(value = "/updateMemo", method = {RequestMethod.GET, RequestMethod.POST})
    public ResponseEntity updateMemo(HttpServletRequest req, @RequestBody Map<String, Object> paramMap) {

        if (paramMap != null) {
            log.info("=== updateMemo paramMap : " + paramMap.toString());
        }
        Map<String, Object> result = new HashMap<String, Object>();

        result = memoService.updateMemo(paramMap);

        log.info("result : " + result.toString());

        return JSONResponse.getJSONResponse(req,result);
    }
}
