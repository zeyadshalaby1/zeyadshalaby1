"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, Printer, Eye, Edit3, Save, FileText, Receipt, Mail } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ContractBuilder() {
  const [docType, setDocType] = useState("invoice"); // 'invoice', 'contract', 'letter'
  const [isPreview, setIsPreview] = useState(false);
  const [data, setData] = useState({
    invoiceNum: `ZS-INV-${Math.floor(1000 + Math.random() * 9000)}`,
    contractNum: `ZS-CON-${Math.floor(1000 + Math.random() * 9000)}`,
    letterNum: `ZS-LTR-${Math.floor(1000 + Math.random() * 9000)}`,
    issueDate: new Date().toLocaleDateString("en-GB"),
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("en-GB"),
    project: "",
    subject: "",
    clientName: "",
    clientRole: "",
    clientEmail: "",
    clientAddress: "",
    letterContent: "هنا بتكتب مقدمة الخطاب. يرجى تعديل هذا النص بما يناسب احتياجاتك.",
    letterHighlight: "هنا حط أهم حاجة في الخطاب — سواء كانت عرض، قرار، أو معلومة مهمة.",
    items: [{ name: "", desc: "", qty: 1, price: 0 }],
    clauses: [
      { id: "01", title: "نطاق العمل · SCOPE OF WORK", text: "يلتزم الطرف الأول بتنفيذ المشروع وفقاً للمواصفات المتفق عليها." },
      { id: "02", title: "المدة · TIMELINE", text: "مدة تنفيذ المشروع [X] أسابيع من تاريخ استلام الدفعة الأولى." },
      { id: "03", title: "التسعير والدفع · PAYMENT", text: "إجمالي المشروع: [TOTAL] EGP — 50% دفعة أولى قبل البداية · 50% عند التسليم النهائي" },
    ],
    bank: "",
    accountNo: "",
    instapay: "",
    vodafone: "",
    notes: "شكراً جزيلاً على ثقتك. الفاتورة مستحقة خلال 7 أيام من تاريخ الإصدار.",
  });

  const handleAddItem = () => {
    setData({ ...data, items: [...data.items, { name: "", desc: "", qty: 1, price: 0 }] });
  };

  const handleRemoveItem = (index) => {
    setData({ ...data, items: data.items.filter((_, i) => i !== index) });
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...data.items];
    newItems[index][field] = value;
    setData({ ...data, items: newItems });
  };

  const handleAddClause = () => {
    const nextId = String(data.clauses.length + 1).padStart(2, '0');
    setData({ ...data, clauses: [...data.clauses, { id: nextId, title: "", text: "" }] });
  };

  const handleRemoveClause = (index) => {
    setData({ ...data, clauses: data.clauses.filter((_, i) => i !== index) });
  };

  const handleClauseChange = (index, field, value) => {
    const newClauses = [...data.clauses];
    newClauses[index][field] = value;
    setData({ ...data, clauses: newClauses });
  };

  const calculateSubtotal = () => {
    return data.items.reduce((sum, item) => sum + (item.qty * item.price), 0);
  };

  const handlePrint = () => {
    window.print();
  };

  if (isPreview) {
    return (
      <div className="space-y-6">
        <style>{`
          @media print {
            body * { visibility: hidden; background: white !important; }
            #doc-preview, #doc-preview * { visibility: visible; }
            #doc-preview {
              position: absolute; left: 0; top: 0; width: 100%; margin: 0; padding: 0; box-shadow: none; border-radius: 0;
            }
            .no-print { display: none !important; }
          }
        `}</style>

        <div className="flex justify-between items-center mb-4 sticky top-0 bg-background/80 backdrop-blur-md p-4 z-50 border-b border-border/50 no-print">
          <Button variant="outline" onClick={() => setIsPreview(false)} className="gap-2">
            <Edit3 className="size-4" /> تعديل البيانات
          </Button>
          <Button onClick={handlePrint} variant="outline" className="gap-2 border-primary/50 text-primary">
            <Printer className="size-4" /> طباعة / حفظ PDF
          </Button>
        </div>

        <div className="flex justify-center bg-muted/30 p-0 md:p-8 rounded-xl overflow-auto min-h-screen">
          <div id="doc-preview" className="bg-white text-[#1a1a1a] shadow-2xl rounded-[20px] overflow-hidden w-[780px] min-h-[1100px] font-['Cairo'] relative flex flex-col">
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Space+Mono:wght@400;700&display=swap');
              .doc-preview { font-family: 'Cairo', sans-serif; direction: rtl; }
              .mono { font-family: 'Space Mono', monospace; }
              .top-bar { height: 5px; background: linear-gradient(90deg, #00FF88, #7B2FFF); }
              .header { padding: 36px 48px 24px; border-bottom: 1px solid #e8f5ee; }
              .header-inner { display: flex; justify-content: space-between; align-items: flex-start; }
              .brand { display: flex; align-items: center; gap: 14px; }
              .brand-name { font-size: 18px; font-weight: 900; color: #050f05; line-height: 1.1; }
              .brand-role { font-family: 'Space Mono', monospace; font-size: 8px; color: #00cc6a; letter-spacing: 2.5px; margin-top: 2px; }
              .doc-word { font-size: 32px; font-weight: 900; color: #050f05; letter-spacing: -1px; line-height: 1; }
              .doc-num { font-family: 'Space Mono', monospace; font-size: 9px; color: #00cc6a; letter-spacing: 2px; margin-top: 4px; }
              .parties { padding: 24px 48px; display: grid; grid-template-columns: 1fr 1fr; gap: 30px; border-bottom: 1px solid #f0f0ec; background: #fafaf8; }
              .party-label { font-family: 'Space Mono', monospace; font-size: 7px; letter-spacing: 3px; color: #00cc6a; margin-bottom: 8px; }
              .party-name { font-size: 14px; font-weight: 900; color: #050f05; margin-bottom: 3px; }
              .party-detail { font-size: 10px; color: #888; line-height: 1.8; }
              .item-row { display: grid; grid-template-columns: 1fr 80px 100px 100px; gap: 12px; padding: 12px 48px; border-bottom: 1px solid #f5f5f0; align-items: center; }
              .mono-text { font-family: 'Space Mono', monospace; font-size: 10px; direction: ltr; text-align: left; }
              .footer { background: #050f05; padding: 16px 48px; display: flex; justify-content: space-between; align-items: center; margin-top: auto; }
              .corner-mark { position: absolute; bottom: 80px; left: 40px; opacity: 0.04; pointer-events: none; }
            `}</style>
            
            <div className="top-bar"></div>
            <div className="header">
              <div className="header-inner">
                <div className="brand">
                  <svg width="52" height="52" viewBox="0 0 80 80" fill="none"><rect x="6" y="6" width="68" height="68" rx="18" fill="#050f05"/><path d="M18 20 L62 20 L18 60 L62 60" stroke="#00FF88" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="62" cy="20" r="7" fill="#00FF88"/><circle cx="18" cy="60" r="7" fill="#7B2FFF"/></svg>
                  <div><div className="brand-name">زياد شلبي</div><div className="brand-role uppercase mono">FULL STACK DEVELOPER</div></div>
                </div>
                <div className="text-left">
                  <div className="doc-word uppercase mono">{docType}</div>
                  <div className="doc-num mono">#{docType === 'invoice' ? data.invoiceNum : docType === 'contract' ? data.contractNum : data.letterNum} · {data.issueDate}</div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              {docType === 'invoice' ? (
                <>
                  <div className="parties">
                    <div><div className="party-label">FROM / من</div><div className="party-name">زياد شلبي</div><div className="party-detail">Full Stack Developer<br />zeyad@domain.com</div></div>
                    <div><div className="party-label">TO / إلى</div><div className="party-name">{data.clientName || "[العميل]"}</div><div className="party-detail">{data.clientRole}<br />{data.clientAddress}</div></div>
                  </div>
                  <div className="p-12">
                    {data.items.map((item, i) => (
                      <div key={i} className="item-row">
                        <div><div className="font-bold text-sm">{item.name}</div><div className="text-xs text-gray-400">{item.desc}</div></div>
                        <div className="mono-text">{item.qty}</div>
                        <div className="mono-text">{item.price} EGP</div>
                        <div className="mono-text font-bold">{(item.qty * item.price).toLocaleString()} EGP</div>
                      </div>
                    ))}
                  </div>
                </>
              ) : docType === 'contract' ? (
                <div className="p-12 space-y-8">
                  {data.clauses.map((clause, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center gap-3 font-bold text-sm text-[#00cc6a]"><span className="bg-black text-[#00FF88] size-6 rounded-full flex items-center justify-center text-[10px]">{clause.id}</span>{clause.title}</div>
                      <div className="text-sm leading-relaxed text-gray-600 pr-9">{clause.text}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 space-y-6">
                  <div className="text-lg font-black border-b-2 border-[#00FF88] pb-2 inline-block">{data.subject}</div>
                  <div className="text-sm leading-loose whitespace-pre-wrap">{data.letterContent}</div>
                  <div className="bg-[#f0fff6] border-r-4 border-[#00FF88] p-4 text-sm text-[#3a6a4a]">{data.letterHighlight}</div>
                </div>
              )}
            </div>

            <div className="sig-section p-12 grid grid-cols-2 gap-12 border-t border-gray-100">
              <div className="space-y-4">
                <div className="text-[10px] text-gray-400 mono">AUTHORIZED SIGNATURE</div>
                <div className="border-t border-black pt-2 font-bold">زياد شلبي</div>
              </div>
              <div className="space-y-4">
                <div className="text-[10px] text-gray-400 mono">CLIENT SIGNATURE</div>
                <div className="border-t border-black pt-2 font-bold">{data.clientName || "................"}</div>
              </div>
            </div>

            <div className="footer">
              <div className="text-[#00FF88] font-bold text-xs mono">ZS / DEV</div>
              <div className="flex gap-2"><span className="text-[8px] text-[#2a4a2a] mono">NEXT.JS</span><span className="text-[8px] text-[#2a4a2a] mono">GO</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">منشئ الوثائق</h2>
        <Button onClick={() => setIsPreview(true)} className="gap-2"><Eye className="size-4" /> معاينة</Button>
      </div>

      <Tabs defaultValue="invoice" onValueChange={setDocType} className="w-full">
        <TabsList className="grid w-full max-w-lg grid-cols-3">
          <TabsTrigger value="invoice" className="gap-2"><Receipt className="size-4" /> فاتورة</TabsTrigger>
          <TabsTrigger value="contract" className="gap-2"><FileText className="size-4" /> عقد</TabsTrigger>
          <TabsTrigger value="letter" className="gap-2"><Mail className="size-4" /> خطاب</TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader><CardTitle>البيانات الأساسية</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>رقم الوثيقة</Label><Input value={docType === 'invoice' ? data.invoiceNum : docType === 'contract' ? data.contractNum : data.letterNum} onChange={(e) => setData({...data, [docType === 'invoice' ? 'invoiceNum' : docType === 'contract' ? 'contractNum' : 'letterNum']: e.target.value})} /></div>
                <div className="space-y-2"><Label>الموضوع / المشروع</Label><Input value={docType === 'letter' ? data.subject : data.project} onChange={(e) => setData({...data, [docType === 'letter' ? 'subject' : 'project']: e.target.value})} /></div>
              </div>
              <div className="space-y-2"><Label>التاريخ</Label><Input value={data.issueDate} onChange={(e) => setData({...data, issueDate: e.target.value})} /></div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>بيانات الطرف المستلم</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>الاسم</Label><Input value={data.clientName} onChange={(e) => setData({...data, clientName: e.target.value})} /></div>
                <div className="space-y-2"><Label>المنصب</Label><Input value={data.clientRole} onChange={(e) => setData({...data, clientRole: e.target.value})} /></div>
              </div>
              <div className="space-y-2"><Label>العنوان</Label><Input value={data.clientAddress} onChange={(e) => setData({...data, clientAddress: e.target.value})} /></div>
            </CardContent>
          </Card>

          {docType === 'invoice' && (
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row justify-between items-center"><CardTitle>الخدمات</CardTitle><Button size="sm" onClick={handleAddItem}><Plus className="size-4" /></Button></CardHeader>
              <CardContent className="space-y-4">
                {data.items.map((item, i) => (
                  <div key={i} className="grid grid-cols-4 gap-4 items-end border-b pb-4">
                    <div className="col-span-2 space-y-2"><Label>الخدمة</Label><Input value={item.name} onChange={(e) => handleItemChange(i, "name", e.target.value)} /></div>
                    <div className="space-y-2"><Label>السعر</Label><Input type="number" value={item.price} onChange={(e) => handleItemChange(i, "price", parseInt(e.target.value))} /></div>
                    <Button variant="ghost" onClick={() => handleRemoveItem(i)}><Trash2 className="size-4 text-destructive" /></Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {docType === 'contract' && (
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row justify-between items-center"><CardTitle>البنود</CardTitle><Button size="sm" onClick={handleAddClause}><Plus className="size-4" /></Button></CardHeader>
              <CardContent className="space-y-4">
                {data.clauses.map((clause, i) => (
                  <div key={i} className="space-y-2 p-4 border rounded-lg">
                    <Input value={clause.title} onChange={(e) => handleClauseChange(i, "title", e.target.value)} className="font-bold" />
                    <Textarea value={clause.text} onChange={(e) => handleClauseChange(i, "text", e.target.value)} />
                    <Button variant="ghost" size="sm" onClick={() => handleRemoveClause(i)} className="text-destructive">حذف البند</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {docType === 'letter' && (
            <Card className="lg:col-span-2">
              <CardHeader><CardTitle>محتوى الخطاب</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <Textarea value={data.letterContent} onChange={(e) => setData({...data, letterContent: e.target.value})} className="min-h-[200px]" />
                <div className="space-y-2"><Label>النقطة المميزة (Highlight)</Label><Textarea value={data.letterHighlight} onChange={(e) => setData({...data, letterHighlight: e.target.value})} /></div>
              </CardContent>
            </Card>
          )}
        </div>
      </Tabs>
    </div>
  );
}
