package com.chixing.service.impl;

import com.chixing.dao.NoteDao;
import com.chixing.entity.Note;
import com.chixing.entity.NoteExample;
import com.chixing.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class NoteServiceImpl implements NoteService {

    @Autowired
    private NoteDao noteDao;

    @Override
    public List<Note> getLastTen() {
        return noteDao.selectOrderByCreateTimeDescTenRecords();

    }

    @Override
    public boolean save(Note note) {
        return noteDao.insert(note)>0;
    }

    @Override
    public List<Note> getMyList(int custId) {
        NoteExample noteExample = new NoteExample();
        noteExample.createCriteria().andCustIdEqualTo(custId);
        return  noteDao.selectByExample(noteExample);

    }

    @Override
    public Note getMyLastNote(int custId) {
        return noteDao.selectOneOrderByCreateTimeDescByCustId(custId);
    }


}
